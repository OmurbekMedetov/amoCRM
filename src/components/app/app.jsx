import HeaderAmoCRM from '../header-amoCRM/header-amoCRM';
import MainAmoCRM from '../main-amoCRM/main-amoCRM';
import FooterAmoCRM from '../footer-amoCRM/footer-amoCRM';
import './app.module.scss';

export default function App() {
  return (
    <div>
      <HeaderAmoCRM />
      <MainAmoCRM />
      <FooterAmoCRM />
    </div>
  );
}
