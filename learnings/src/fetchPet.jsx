const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];
  const apiRequest = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
  if (!apiRequest.ok) {
    throw new Error(`Details with /${id} went something wrong!!`);
  }
  return apiRequest.json();
};

export default fetchPet;
