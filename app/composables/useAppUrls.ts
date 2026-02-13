export function useAppUrls() {
  const runtimeConfig = useRuntimeConfig();
  const webappUrl = runtimeConfig.public.webappUrl as string;

  const signupUrl = computed(() => `${webappUrl}/signup`);
  const loginUrl = computed(() => `${webappUrl}/login`);

  return {
    signupUrl,
    loginUrl,
  };
}
