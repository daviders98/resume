export const contactExtra = 'Stop dreaming and let us start making it a reality.'

export const contactPhrase = 'Ideas are powerful, but they need action to become reality. Share your project with me, and together we&apos;ll transform your concept into a solution that makes an impact.'

export type ModalStatus = 'success' | 'error' | null;

export interface MailModalProps {
    status: ModalStatus;
    onClose: () => void;
}