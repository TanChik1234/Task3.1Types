type DialogButtonType = "Yes" | "No";

interface FormButton {
    type: "Add" | "Remove" | "Buy"
}

// задача 1: создайте тип AnyButtonType, который описывает все вариации кнопок
type AnyButtonType = DialogButtonType | FormButton["type"]; // только без копипасты литералов, пожалуйста


function print(textButton: AnyButtonType){
  console.log(textButton);
}

print("Yes");
print("No");
print("Add");
print("Remove");
print("Buy");


// задача 2: создайте тип ConfirmationHandlingFormButton
// т.е. подтип формовых кнопок, которые ещё содержат поле onConfirm, в котором
// может лежать функция, которая вызывается с параметром типа DialogButtonType
// (и ничего не возвращает)
// Т.е. предполагается что у кнопки такого типа, если поле onConfirm пустое, 
// то при нажатии на эту кнопку сразу происходит действие
// а иначе вызывается диалог Подтверждения, и результат нажатия на кнопку Да или Нет
// в итоге попадет в функцию onConfirm, которая уже дальше решит что делать
type ConfirmationHandlingFormButton = {
  onConfirm(dialogButton:DialogButtonType):void | null
};

// .... НЕТ, не надо писать все эти диалоги формы кнопки, 
// мы описываем чисто типы сейчас.