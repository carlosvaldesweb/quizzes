/**
 * Returns the application name from runtime config
 * This value is set via APP_NAME environment variable
 */
export function useAppName() {
  const config = useRuntimeConfig();
  return config.public.appName as string;
}
