import { useMemo } from "react";

import { useTranslation } from "react-i18next";
import { SelectOption } from "../../models/main.models";

enum RegionOptions {
  lowerSilesia = "LOWER_SILESIA",
  kuyaviaPomerania = "KUYAVIA_POMERANIA",
  lublin = "LUBLIN",
  lubusz = "LUBUSZ",
  lodz = "LODZ",
  lesserPoland = "LESSER_POLAND",
  masovia = "MASOVIA",
  opole = "OPOLE",
  subcarpathia = "SUBCARPATHIA",
  podlaskie = "PODLASKIE",
  pomerania = "POMERANIA",
  silesia = "SILESIA",
  holyCross = "HOLY_CROSS",
  warmiaMasuria = "WARMIA_MASURIA",
  greaterPoland = "GREATER_POLAND",
  westPomerania = "WEST_POMERANIA",
}

export function useRegionOptions(): SelectOption[] {
  const { t } = useTranslation();

  return useMemo(() => {
    return Object.values(RegionOptions).map((item) => ({
      label: t(`FORM.REGION.${item}`),
      value: item,
    }));
  }, [t]);
}
