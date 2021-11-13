const Home = () => {
  return (
    <>
      <h1 className="text-3xl font-bold my-8">
        Tensorflow Model Example With Vite
      </h1>
      <div className="flex flex-col space-y-8">
        <div>
          <h2 className="text-lg font-semibold my-4">이미지</h2>
          <ul className="list-disc list-inside">
            <li>객체 감지</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold my-4">영상 (실시간)</h2>
          <ul className="list-disc list-inside">
            <li className="text-gray-400">신체 분절화</li>
            <li className="text-gray-400">자세 인식</li>
            <li>얼굴 인식</li>
            <li className="text-gray-400">시멘틱 세분화</li>
            <li>얼굴 랜드마크 감지</li>
            <li>손 모양 인식</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold my-4">음성 인식</h2>
          <ul className="list-disc list-inside">
            <li className="text-gray-400">음성 인식</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold my-4">자연어 처리</h2>
          <ul className="list-disc list-inside">
            <li className="text-gray-400">악성 텍스트 감지</li>
            <li className="text-gray-400">자연어 질문 답변</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
