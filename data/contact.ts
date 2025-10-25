export const contactExtra = {
    en: "Stop dreaming and let us start making it a reality.",
    es: "Deja de soñar y comencemos a hacerlo realidad.",
    zh: "停止梦想，让我们开始实现它。"
}

export const contactPhrase = {
    en: "Ideas are powerful, but they need action to become reality. Share your project with me, and together we will transform your concept into a solution that makes an impact.",
    es: "Las ideas son poderosas, pero necesitan acción para convertirse en realidad. Comparte tu proyecto conmigo y juntos transformaremos tu concepto en una solución que genere impacto.",
    zh: "想法是强大的，但它们需要行动才能成为现实。与我分享你的项目，我们将共同把你的概念转化为有影响力的解决方案。"
}

export type ModalStatus = "success" | "error" | null;

export interface MailModalProps {
  status: ModalStatus;
  onClose: () => void;
}

export const letsTalkStart = {
    en:"Let's",
    es:"Hablemos ",
    zh:"让我们"
}
export const letsTalkEnd = {
    en:"Talk",
    es:"Ya",
    zh:"让我们聊一聊"
}

export const fullNameForm = {
    en: "Full Name",
    es: "Nombre Completo",
    zh: "全名"
}

export const placeholderNameForm = {
    en: "Your full name",
    es: "Tu nombre completo",
    zh: "你的全名"
}

export const emailForm = {
    en: "Email",
    es: "Correo Electrónico",
    zh: "电子邮件"
}

export const subjectForm = {
    en: "Subject",
    es: "Asunto",
    zh: "主题"
}

export const placeholderSubjectForm = {
    en: "How can I help you?",
    es: "¿Cómo puedo ayudarte?",
    zh: "我能帮你什么？"
}

export const messageForm = {
    en: "Message",
    es: "Mensaje",
    zh: "信息"
}

export const placeholderMessageForm = {
    en:"Tell me more...",
    es:"Cuéntame más...",
    zh:"告诉我更多..."
}

export const sendText = {
    en: "Send",
    es: "Enviar",
    zh: "发送"
}

export const sendingText = {
    en: "Sending...",
    es: "Enviando...",
    zh: "发送中..."
}

export const messageSentText = {
    en: "Message Sent!",
    es: "¡Mensaje Enviado!",
    zh: "信息已发送！"
}

export const messageErrorText = {
    en: "Oops, something went wrong!",
    es: "¡Vaya, algo salió mal!",
    zh: "哎呀，出了点问题！"
}

export const messageSentExtraText = {
    en: "Thanks for reaching out. I will get back to you within 2 business days!",
    es: "Gracias por contactarme. Me pondré en contacto contigo en un plazo de 2 días hábiles.",
    zh: "感谢您的联系。我将在2个工作日内回复您！"
}

export const messageErrorExtraText = {
    en: "Please try again later.",
    es: "Por favor, inténtalo de nuevo más tarde.",
    zh: "请稍后再试。"
}

export const closeText = {
    en: "Close",
    es: "Cerrar",
    zh: "关闭"
}