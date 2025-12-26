function getUserRAMKey() {
  const moduleName = 'BackendModule';
  return `ApplicationRAM_${moduleName}`;
}
export function getRAM(DataTable: string, key: string | null = null) {
    if (typeof window === "undefined") return null;
  
    const storageKey = getUserRAMKey();
    const fullData = JSON.parse(localStorage.getItem(storageKey) || "{}");
    const appSetting = fullData.AppSetting || {};
    const tableData = appSetting[DataTable] || {};
    return key ? tableData[key] : tableData;
  }
  
  export function setRAM(DataTable: string, key: string, value: any) {
    if (typeof window === "undefined") return;
  
    const storageKey = getUserRAMKey();
    const fullData = JSON.parse(localStorage.getItem(storageKey) || "{}");
    fullData.AppSetting = fullData.AppSetting || {};
    fullData.AppSetting[DataTable] = fullData.AppSetting[DataTable] || {};
    fullData.AppSetting[DataTable][key] = value;
    localStorage.setItem(storageKey, JSON.stringify(fullData));
  }