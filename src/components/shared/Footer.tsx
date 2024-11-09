export default function Footer() {
  return (
    <footer className="py-6 bg-gray-50 items-center">
      <div className="flex w-4/5 pt-4 border-t border-gray-400 items-center justify-between text-gray-700 m-auto">
        <div className="flex gap-6">
          <span className="cursor-pointer">이용안내</span>
          <span className="cursor-pointer">개인정보처리방침</span>
        </div>
        <div>
          <span>© 자갈돌. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
