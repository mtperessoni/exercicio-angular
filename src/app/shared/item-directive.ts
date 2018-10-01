import { ValidatorFn, AbstractControl } from "@angular/forms";
import { UnidadeMedida } from "../itemEnum";

export function unidadeValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        let regExp: RegExp;
        let message: String;
        if (control.parent == undefined) {
            return null;
        }
        // Cria a devida expressão regular para cada tipo de unidade e utiliza ela para validar o campo.
        switch (control.parent.value.unidadeMedida) {
            // Unidade valida se possui apenas números inteiros.
            case UnidadeMedida.Unidade:
                regExp = new RegExp(/^\d+$/);
                message = "Permitido inserir somente números. Exemplo: 10"
                break;
            // Quilograma e Litro utilizam a mesma expressão. Somente números e termina com 3 casas decimais
            default:
                regExp = new RegExp(/([0-9])*,\d{1,3}$/);
                message = "Permitido inserir somente números, com até 3 casas decimais. Exemplo: 33,111"
                break;

        }
        if (control.value == "0" || control.value == undefined) {
            return { 'quantidade': message };
        }
        // Valida se o campo está correto.
        let valid = regExp.test(control.value);
        return valid ? null : { 'quantidade': message };
    };
}

export function characterValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        let regExp: RegExp = new RegExp(/^[A-Za-z_ ]*$/);
        let message: String;

        if (control.value == undefined) {
            return null;
        }

        // Valida se o campo possui somente caracteres
        let valid = regExp.test(control.value);
        return valid ? null : { 'caractere': true };
    };
}

export function dataFabricacaoValidator() {
    return (control: AbstractControl): { [key: string]: any } | null => {
        // Se a data de fabricação for maior que a data de validade, retorna um erro.
        if (control != undefined && control.parent != undefined && control.value != undefined && control.parent.value.dataValidade != undefined
            && control.value.setHours(0, 0, 0, 0) > control.parent.value.dataValidade.setHours(0, 0, 0, 0) && control.parent.value.perecivel == true) {
            return { 'dataFabricacao': "A data de fabricação não pode ser maior que a data de validade." }
        }

        return null;
    };
}

export function dataValidadeValidator() {
    return (control: AbstractControl): { [key: string]: any } | null => {
        // Zera as horas de ambas as datas para que compare somente as datas(dia/mes/ano)
        let date = new Date().setHours(0, 0, 0, 0);

        // Se for um produto perecível e o valor estiver vazio, retorna erro.
        if (control != undefined && control.parent != undefined && control.parent.value.perecivel == true && control.value == undefined) {
            return { 'required': true }
        }

        // Se for um produto perecível e a data for menor que a atual, retorna erro.
        if (control != undefined && control.value != undefined && control.value.setHours(0, 0, 0, 0) < date) {
            return { 'dataValidade': true }
        }


        return null;
    };
}