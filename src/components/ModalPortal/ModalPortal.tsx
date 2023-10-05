import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { backdrop, content } from './modalPortal.css';

interface ModalPortalProps {
  height?: string;
  onClose: () => void;
  children: ReactNode;
}

const ModalPortal = ({ height, onClose, children }: ModalPortalProps) => {
  return createPortal(
    <>
      <div className={backdrop} onClick={onClose} aria-hidden />
      <section className={content} style={{ height }}>
        {children}
      </section>
    </>,
    document.getElementById('modal') as HTMLDivElement
  );
};

export default ModalPortal;
