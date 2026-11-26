// Contacto, aviso legal, privacidad y cookies. Se abre desde la pantalla de entrar y desde Ajustes.
// Todo lo legal y de contacto va a un solo correo: CONTACT_EMAIL.
import { useState } from 'react';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';
import { cn } from '@/lib/utils';

export const CONTACT_EMAIL = 'davidvillarduran@icloud.com';
const UPDATED = '27 de noviembre de 2026';

const mail = <a className="font-medium text-foreground underline underline-offset-4" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-2">
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      {children}
    </section>
  );
}

export function LegalContent() {
  return (
    <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
      <Section title="Contacto">
        <p>Para cualquier duda, problema, petición sobre tus datos o asunto legal, escribe a {mail}. Es el único canal de contacto de Tilo.</p>
      </Section>

      <Section title="Aviso legal">
        <p>Tilo es una aplicación personal y gratuita para llevar las cuentas de casa. No tiene fines comerciales, no muestra publicidad y no vende nada.</p>
        <p>La responsable de la aplicación es la persona titular de {mail}. Tilo se ofrece tal cual: los cálculos son orientativos y no sustituyen asesoramiento financiero.</p>
      </Section>

      <Section title="Privacidad">
        <p><b className="text-foreground">Qué datos se guardan.</b> Tu email y tu contraseña (cifrada; nadie puede leerla), y lo que apuntas en tu hogar: perfiles, trabajos, horarios, gastos, ingresos, regalos, listas de deseos y pendientes.</p>
        <p><b className="text-foreground">Para qué.</b> Solo para que la app funcione y para que las personas de tu hogar vean los mismos datos. No se usan para publicidad, no se analizan con fines comerciales y no se ceden a terceros.</p>
        <p><b className="text-foreground">Quién los ve.</b> Solo las personas de tu hogar. La base de datos impide que nadie de fuera acceda a ellos.</p>
        <p><b className="text-foreground">Dónde se guardan.</b> En Supabase (base de datos y acceso) y la web se sirve desde Vercel. Ambos actúan como proveedores técnicos.</p>
        <p><b className="text-foreground">Tus derechos.</b> Puedes ver y corregir tus datos en la propia app, y eliminar tu cuenta en Ajustes. Para pedir una copia, la rectificación o el borrado de cualquier dato, o para oponerte a su uso, escribe a {mail}.</p>
      </Section>

      <Section title="Cookies">
        <p>Tilo no usa cookies de publicidad ni de análisis. Solo guarda en tu navegador lo necesario para mantener tu sesión abierta y recordar pequeñas preferencias (por ejemplo, la última pestaña que abriste).</p>
      </Section>

      <p className="text-xs">Última actualización: {UPDATED}.</p>
    </div>
  );
}

/** Enlace que abre «Legal y contacto» en una hoja. */
export function LegalLink({ className, label = 'Legal y contacto' }: { className?: string; label?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" className={cn('text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline', className)} onClick={() => setOpen(true)}>
        {label}
      </button>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent className="mx-auto max-h-[92svh] w-full max-w-2xl">
          <DrawerHeader>
            <DrawerTitle>Legal y contacto</DrawerTitle>
            <DrawerDescription>Contacto, aviso legal, privacidad y cookies.</DrawerDescription>
          </DrawerHeader>
          <div className="overflow-y-auto px-4 pb-2"><LegalContent /></div>
          <DrawerFooter className="flex-row justify-between">
            <Button asChild variant="outline"><a href={`mailto:${CONTACT_EMAIL}`}><Mail /> Escribir</a></Button>
            <Button variant="ghost" onClick={() => setOpen(false)}>Cerrar</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
