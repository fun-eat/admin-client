import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { backdrop, content } from './modalPortal.css';

interface ModalPortalProps {
  onClose: () => void;
  children: ReactNode;
}

const ModalPortal = ({ onClose, children }: ModalPortalProps) => {
  return createPortal(
    <>
      <div className={backdrop} onClick={onClose} aria-hidden />
      <section className={content}>{children}</section>
    </>,
    document.getElementById('modal') as HTMLDivElement
  );
};

export default ModalPortal;
