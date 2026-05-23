import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function OrderSuccess({ token, onClose }: { token: string | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {token && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-foreground/40 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed left-1/2 top-1/2 z-[70] w-[92%] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-3xl glass-strong p-7 text-center shadow-float"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 12, stiffness: 200 }}
              className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-success text-success-foreground"
            >
              <CheckCircle2 className="h-9 w-9" />
            </motion.div>
            <h3 className="font-display text-xl font-bold">Order sent!</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Your order token is
            </p>
            <div className="mx-auto mt-3 inline-block rounded-2xl bg-foreground px-5 py-2.5 font-display text-2xl font-bold tracking-wider text-background">
              #{token}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Save this token. The shop will confirm details on WhatsApp.
            </p>
            <button
              onClick={onClose}
              className="mt-5 w-full rounded-2xl bg-foreground py-3 text-sm font-semibold text-background"
            >
              Continue shopping
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
