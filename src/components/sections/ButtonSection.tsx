import { Button } from "@heroui/react";

type ButtonColor = "primary" | "default" | "secondary" | "success" | "warning" | "danger";

type ButtonSectionProps = {
  title: string;
  className?: string;
  colorBtn?: ButtonColor; // 👈 restreint aux valeurs valides
};

export default function ButtonSection({ title, colorBtn,className }: ButtonSectionProps) {
  return <Button className={className} color={colorBtn ?? "primary"}>{title || "Button"}</Button>;
}
