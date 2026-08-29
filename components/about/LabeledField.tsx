interface LabeledFieldProps {
  label: string;
  value?: string;
}

export function LabeledField({ label, value }: LabeledFieldProps) {
  return (
    <p className="text-xs tracking-wide text-gold sm:text-sm">
      {label}:
      {value ? <span className="text-text"> {value}</span> : null}
    </p>
  );
}
