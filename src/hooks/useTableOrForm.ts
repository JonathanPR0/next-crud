import { useState } from "react";

export default function useTableOrForm() {
  const [isVisible, setIsVisible] = useState<"table" | "form">("table")
  const showForm = () => setIsVisible("form")
  const showTable = () => setIsVisible("table")

  return {
    formIsVisible: isVisible === "form",
    tableIsVisible: isVisible === "table",
    showForm,
    showTable
  }
}