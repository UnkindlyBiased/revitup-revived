import { useMutation } from "@tanstack/react-query";
import AuthService from "../../services/auth.service";

const useRegistrate = () => useMutation({
    mutationKey: ['registrate'],
    mutationFn: AuthService.register
})

export default useRegistrate