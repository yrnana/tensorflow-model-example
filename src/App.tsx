import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '~/components/Layout';

const BodyPix = lazy(() => import('~/pages/BodyPix'));
const FaceDetection = lazy(() => import('~/pages/FaceDetection'));
const FaceLandmarksDetection = lazy(
  () => import('~/pages/FaceLandmarksDetection'),
);
const HandPose = lazy(() => import('~/pages/HandPose'));
const Home = lazy(() => import('~/pages/Home'));
const ObjectDetection = lazy(() => import('~/pages/ObjectDetection'));
const PoseDetection = lazy(() => import('~/pages/PoseDetection'));
const QnA = lazy(() => import('~/pages/QnA'));
const SemanticSegmentation = lazy(() => import('~/pages/SemanticSegmentation'));
const SpeechCommandRecognizer = lazy(
  () => import('~/pages/SpeechCommandRecognizer'),
);
const Toxicity = lazy(() => import('~/pages/Toxicity'));

function App() {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="object-detection" element={<ObjectDetection />} />
            <Route path="body-pix" element={<BodyPix />} />
            <Route path="pose-detection" element={<PoseDetection />} />
            <Route path="toxicity" element={<Toxicity />} />
            <Route
              path="speech-commands"
              element={<SpeechCommandRecognizer />}
            />
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
    </Suspense>
  );
}

export default App;
