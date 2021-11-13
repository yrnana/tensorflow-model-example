import { NavLink, NavLinkProps, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col min-h-screen">
        <header className="py-4 flex-shrink-0 overflow-x-auto">
          <nav className="flex items-center space-x-4">
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/object-detection">객체 감지</ActiveLink>
            <ActiveLink to="/body-pix">신체 분절화</ActiveLink>
            <ActiveLink to="/pose-detection">자세 인식</ActiveLink>
            <ActiveLink to="/toxicity">악성 텍스트 감지</ActiveLink>
            <ActiveLink to="/speech-commands">음성 인식</ActiveLink>
            <ActiveLink to="/face-detection">얼굴 인식</ActiveLink>
            <ActiveLink to="/semantic-segmentation">시맨틱 세분화</ActiveLink>
            <ActiveLink to="/face-landmarks-detection">
              얼굴 랜드마크 감지
            </ActiveLink>
            <ActiveLink to="/hand-pose">손 모양 인식</ActiveLink>
            <ActiveLink to="/qna">자연어 질문 답변</ActiveLink>
          </nav>
        </header>
        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;

const ActiveLink = (props: NavLinkProps) => {
  return (
    <NavLink
      {...props}
      className={({ isActive }) =>
        isActive
          ? 'text-purple-500 flex-shrink-0'
          : 'text-gray-500 flex-shrink-0'
      }
    />
  );
};
