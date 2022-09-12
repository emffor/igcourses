import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

//ReactNode: aceita qualquer coisa que o react aceita

interface ActiveLinkProps extends LinkProps {
    children: ReactElement; //diferente do ReactNode, ele espera um elemento do react
    shouldMatchExactHref?: boolean; //se o link deve ser exibido como ativo quando a rota for exatamente igual ao href
}

export function ActiveLink({ children, shouldMatchExactHref = false, ...rest }: ActiveLinkProps) {
    const { asPath } = useRouter(); //pega a rota atual
    let isActive = false;

    //se o link for exatamente igual a rota atual, isActive recebe true
    if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
        isActive = true;
    }

    //se o link não for exatamente igual, verifica se o link atual começa com o href
    if (!shouldMatchExactHref && (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))) {
        isActive = true;
    }


    return (
        <Link {...rest}>
            {cloneElement(children, {
                color: isActive ? "orange" : "gray.50",
            })}
        </Link>
    );
}