"use client";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export default function Textarea({ label, ...props }: TextareaProps) {
  return (
    <label className="flex flex-col gap-1 text-sm">
      {label && <span className="text-gray-700">{label}</span>}
      <textarea
        {...props}
        className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-black"
      />
    </label>
  );
}