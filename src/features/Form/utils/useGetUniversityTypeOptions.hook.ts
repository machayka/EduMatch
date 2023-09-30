import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { SelectOption } from "../../models/main.models";

enum UniversityTypes {
  Public = "PUBLIC",
  Private = "PRIVATE",
}

export function useUniversityTypeOptions(): SelectOption[] {
  const { t } = useTranslation();

  return useMemo(() => {
    return Object.values(UniversityTypes).map((type) => ({
      label: t(`FORM.OPTIONS.${type}`),
      value: type,
    }));
  }, [t]);
}
