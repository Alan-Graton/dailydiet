interface Params {
  setLoading: (state: boolean) => void;
}

export async function getAllMeals(params: Params) {
  try {
    params.setLoading(true);
  } catch (e) {
  } finally {
    params.setLoading(false);
  }
}
