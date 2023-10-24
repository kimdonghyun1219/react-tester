import { useCallback, useState } from "react";

const useToggle = (status = false) => {
  const [state, setState] = useState(status);

  const onToggle = useCallback(() => setState(state => !state), [state]);

  return [state, setState, onToggle];
}

export default useToggle;