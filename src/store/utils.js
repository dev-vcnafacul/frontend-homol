import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function useFetch(selector, action) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const dispatch = useDispatch();
    const data = useSelector(selector);

    function fetchData() {
        setIsLoading(true);
        dispatch(action)
            .then(setError(false))
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    return [data, fetchData, isLoading, error];
}
