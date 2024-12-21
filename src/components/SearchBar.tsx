"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import dayjs from "dayjs";
import { cn } from "@utils";

import MagnifyingGlass from "images/magnifying-glass-light.svg";
import Xmark from "images/xmark-regular.svg";

interface SearchItem {
  keyword: string;
  date: string;
}

export default function SearchBar() {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState<SearchItem[]>([]);
  const [isAutoSave, setIsAutoSave] = useState(true);

  useEffect(() => {
    const storedData = localStorage.getItem("search");
    const recent = storedData ? JSON.parse(storedData) : [];
    setItems(recent);

    const autoSaveState =
      localStorage.getItem("autoSave") === "false" ? false : true;
    setIsAutoSave(autoSaveState);
  }, []);

  const handleSearch = useCallback(() => {
    if (!value.trim() || !isAutoSave) return;

    const updatedItems = [
      { keyword: value, date: dayjs().format("MM.DD") },
      ...items.filter((item) => item.keyword !== value),
    ];
    localStorage.setItem("search", JSON.stringify(updatedItems));
    setItems(updatedItems);
    setValue("");
  }, [value, items, isAutoSave]);

  const handleDeleteAll = useCallback(() => {
    setItems([]);
    localStorage.removeItem("search");
  }, []);

  const toggleAutoSave = useCallback(() => {
    const newAutoSaveState = !isAutoSave;
    setIsAutoSave((prev) => !prev);
    localStorage.setItem("autoSave", newAutoSaveState.toString());
  }, [isAutoSave]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !(event.target instanceof SVGElement)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const handleEnter = (e: KeyboardEvent) => {
      if (e.key === "Enter") handleSearch();
    };

    document.addEventListener("keyup", handleEnter);
    return () => {
      document.removeEventListener("keyup", handleEnter);
    };
  }, [handleSearch]);

  const handleRemoveByIndex = useCallback(
    (e: MouseEvent, index: number) => {
      e.preventDefault();
      const updatedItems = items.filter((_, i) => i !== index);
      setItems(updatedItems);
    },
    [items]
  );

  const defaultClass =
    "flex h-12 gap-3 items-center px-6 border rounded-[6rem] bg-transparent border-gray-500 hover:border-sparkPurple-500";

  return (
    <div className="relative" ref={dropdownRef}>
      <div className={cn(defaultClass, isOpen ? "border-sparkPurple-500" : "")}>
        <input
          className="bg-transparent text-label-l text-gray-900 placeholder:text-gray-500"
          placeholder="제목, 작가를 입력하세요."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => {
            setIsOpen(true);
          }}
        />
        <div className="cursor-pointer" onClick={handleSearch}>
          <MagnifyingGlass className="w-6 h-6" />
        </div>
      </div>
      {isOpen && (
        <div className="mt-2 border rounded border-gray-300 w-80 bg-white flex flex-col justify-center absolute shadow-md">
          <div className="p-2">
            <div className="w-full text-gray-900 text-label-m px-4 py-3 border-b-2 border-black">
              최근 검색어
            </div>
          </div>
          <div className="min-h-20">
            {items.map(({ keyword, date }, index) => (
              <div
                key={keyword}
                className="flex w-full text-gray-900 text-label-m px-4 py-3 items-center justify-between cursor-pointer select-none"
              >
                <span onClick={() => setValue(keyword)}>{keyword}</span>
                <div className="text-gray-500 cursor-pointer flex gap-2 items-center">
                  <span>{date}</span>
                  <Xmark
                    className="fill-gray-500"
                    onClick={(e: MouseEvent) => {
                      handleRemoveByIndex(e, index);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between bg-gray-300 w-full p-2 text-gray-600">
            <div className="cursor-pointer" onClick={toggleAutoSave}>
              <span>{isAutoSave ? "자동 저장 끄기" : "자동 저장 켜기"}</span>
            </div>
            <div className="cursor-pointer">
              <span onClick={handleDeleteAll}>전체 삭제</span>
              <span className="px-2 text-gray-500">|</span>
              <span onClick={() => setIsOpen(false)}>닫기</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
