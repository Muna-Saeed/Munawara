// app/redirect-google-form/page.tsx
import { redirect } from 'next/navigation';

export default function RedirectToForm() {
    redirect('https://docs.google.com/forms/d/e/1FAIpQLScI4A5j50eCKdTn3FPl9VxreHgOuRp4Wk3SupE_ltr8u70gMQ/viewform');
}
