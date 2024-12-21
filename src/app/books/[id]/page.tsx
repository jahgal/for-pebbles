"use client";

import Button from "@/components/shared/Button";
import { range } from "lodash";
import { useParams } from "next/navigation";

export default function BookDetail() {
  const { id } = useParams();

  console.log(id);

  return (
    <div className="w-4/5 m-auto">
      <div className="h-thumbnail flex justify-between items-center">
        <div className="flex gap-8">
          <div className="w-48 h-thumbnail bg-gray-300 rounded-lg">
            소설이미지
          </div>
          <div className="py-5 flex flex-col justify-between">
            <div>
              <div className="text-heading-s mb-4">웹소설 제목</div>
              <div className="text-body-s">장르 | 작가 | 연재 요일</div>
            </div>
            <div className="text-body-m">
              <p>소설 내용을 주저리주저리 쓸건데 말이죠.</p>
              <p>최대 3줄 정도까지만</p>
              <p>입력가능하면 아주 좋을 것 같습니다는 느낌적인 느낌</p>
            </div>
          </div>
        </div>
        <div className="py-5">
          <div className="flex gap-6 text-label-s font-bold items-center justify-center">
            <div>저장</div>
            <div>좋아요</div>
            <div>공유</div>
          </div>
          <div className="w-60 mt-20">
            <Button variant="contained" color="purple" size="medium">
              <span className="text-body-m">읽으러 가기</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <div className="text-heading-s font-bold mb-10">리뷰(25)</div>
        <div className="relative mt-6 mb-10">
          <input
            className="w-full border-2 rounded-lg border-gray-400 px-5 py-3 placeholder:text-detail-l placeholder:text-gray-600 focus:border-sparkPurple-500"
            placeholder="리뷰를 남겨주세요."
          />
          <Button
            size="small"
            additionalClass="w-30 absolute right-4 top-1/2 transform -translate-y-1/2"
          >
            <span className="text-body-m">등록하기</span>
          </Button>
        </div>
        {range(0, 26).map((i) => (
          <div key={i}>
            <div className="p-6 border-b border-gray-300">
              <div className="mb-3">
                <span className="text-gray-900 mr-3 font-bold">닉네임</span>
                <span className="text-gray-600">등록일</span>
              </div>
              <div className="min-h-20">리뷰 내용</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
