import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '~/components/Layout';
import BodyPix from '~/pages/BodyPix';
import FaceDetection from '~/pages/FaceDetection';
import FaceLandmarksDetection from '~/pages/FaceLandmarksDetection';
import HandPose from '~/pages/HandPose';
import Home from '~/pages/Home';
import ObjectDetection from '~/pages/ObjectDetection';
import PoseDetection from '~/pages/PoseDetection';
import QnA from '~/pages/QnA';
import SemanticSegmentation from '~/pages/SemanticSegmentation';
import SpeechCommandRecognizer from '~/pages/SpeechCommandRecognizer';
import Toxicity from '~/pages/Toxicity';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="object-detection" element={<ObjectDetection />} />
          <Route path="body-pix" element={<BodyPix />} />
          <Route path="pose-detection" element={<PoseDetection />} />
          <Route path="toxicity" element={<Toxicity />} />
          <Route path="speech-commands" element={<SpeechCommandRecognizer />} />
          <Route path="face-detection" element={<FaceDetection />} />
          <Route
            path="semantic-segmentation"
            element={<SemanticSegmentation />}
          />
          <Route
            path="face-landmarks-detection"
            element={<FaceLandmarksDetection />}
          />
          <Route path="hand-pose" element={<HandPose />} />
          <Route path="qna" element={<QnA />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
