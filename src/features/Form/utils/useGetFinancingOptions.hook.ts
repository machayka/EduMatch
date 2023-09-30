import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { SelectOption } from "../../models/main.models";

enum FinancingTypes {
  selfFinancing = "SELF_FINANCING",
  scholarship = "SCHOLARSHIP",
  loan = "LOAN",
  work = "WORK",
}

export function useGetFinancingOptions(): SelectOption[] {
  const { t } = useTranslation();

  return useMemo(() => {
    return Object.values(FinancingTypes).map((type) => ({
      label: t(`FORM.OPTIONS.FINANCING.${type}`),
      value: type,
    }));
  }, [t]);
}
