import './styles/main.css';
import { createRoot } from 'react-dom/client';
import AvatarListPage from './pages/AvatarListPage';

const container = document.getElementById('react-app');

if (container) {
  createRoot(container).render(<AvatarListPage />);
} else {
  console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}
