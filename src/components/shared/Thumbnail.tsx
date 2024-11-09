"use client";

// interface ThumbnailProps {
//   title?: string;
//   genre?: string;
//   author?: string;
//   rate?: number;
// }

export default function Thumbnail() {
  return (
    <div>
      <div className="h-thumbnail bg-gray-300 rounded-lg mb-6" />
      <div className="text-gray-900 text-body-l mb-4 font-bold">
        웹소설 제목
      </div>
      <div className="text-gray-700 text-body-m mb-3">장르 | 작가</div>
      <div className="text-gray-700 text-detail-s">평점</div>
    </div>
  );
}
