import * as ReactDOMClient from 'react-dom/client';
import App from './components/app/app';
import './index.scss';

const lending = ReactDOMClient.createRoot(document.querySelector('.root'));
lending.render(<App />);
