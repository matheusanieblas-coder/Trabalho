const formulario = document.getElementById("formDesconto");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const valorCompra = Number(
        document.getElementById("valorCompra").value
    );

    if (!Number.isFinite(valorCompra) || valorCompra < 0) {
        alert("Informe um valor válido para a compra.");
        return;
    }

    let taxaDesconto = 0;

    if (valorCompra >= 100) {
        taxaDesconto = 0.10;
    } else if (valorCompra > 50) {
        taxaDesconto = 0.05;
    }

    const valorDesconto = valorCompra * taxaDesconto;
    const totalFinal = valorCompra - valorDesconto;

    const moeda = valor =>
        valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

    document.getElementById("valorOriginal").textContent =
        moeda(valorCompra);

    document.getElementById("percentual").textContent =
        `${taxaDesconto * 100}%`;

    document.getElementById("valorDesconto").textContent =
        moeda(valorDesconto);

    document.getElementById("totalFinal").textContent =
        moeda(totalFinal);

    document.getElementById("resultado").hidden = false;
});