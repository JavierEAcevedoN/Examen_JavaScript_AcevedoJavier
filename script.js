const FormularioReceta = document.getElementById("section-form-receta");
const NombreReceta = document.getElementById("nombre-receta");
const IngredientesReceta = document.getElementById("ingredientes-receta");
const InstruccionesReceta = document.getElementById("instrucciones-receta");
const TiempoCocinado = document.getElementById("tiempo-cocinado");
const NumeroPorciones = document.getElementById("numero-porciones");
const CategoriaReceta = document.getElementById("categoria-receta");
const DificultadReceta = document.getElementById("dificultad-receta");
const GuardarRecetaBtn = document.getElementById("guardar-receta-btn");
const SectionListaRecetas = document.getElementById("section-lista-recetas");
const BarraBusqueda = document.getElementById("barra-busqueda");
const ListaRecetas = document.getElementById("lista-recetas");

FormularioReceta.addEventListener("submit", (e) => {
    e.preventDefault();
    const TarjetaReceta = document.createElement("div");
    TarjetaReceta.classList.add("tarjeta-receta");
    TarjetaReceta.innerHTML = `
        <h3 class="nombre-tarjeta-receta">${NombreReceta.value}</h3>
        <h4>Ingredientes</h4>
        <p class="ingredientes-tarjeta-receta">${IngredientesReceta.value}</p>
        <h4>Instrucciones de Preparacion</h4>
        <p class="instrucciones-tarjeta-receta">${InstruccionesReceta.value}</p>
        <h4>Tiempo de Cocción (Minutos)</h4>
        <p class="tiempo-tarjeta-receta">${TiempoCocinado.value}</p>
        <h4>Numero de Porciones</h4>
        <p class="numero-porciones-tarjeta-receta">${NumeroPorciones.value}</p>
        <h4>Categoría</h4>
        <p class="categoria-tarjeta-receta">${CategoriaReceta.value}</p>
        <h4>Dificultad de la Receta</h4>
        <p class="dificultad-tarjeta-receta">${DificultadReceta.value}</p>
        <div class="opciones-tarjeta-receta">
            <button class="btn-editar" onclick="EditarReceta(event)">Editar</button>
            <button class="btn-eliminar" onclick="EliminarReceta(event)">Eliminar</button>
        </div>
    `;
    ListaRecetas.appendChild(TarjetaReceta);
    localStorage.setItem("recetas", ListaRecetas.innerHTML);
});

const EditarReceta = (event) => {
    const ElementoPadre = event.target.parentElement.parentElement;
    const NombreTarjetaReceta = ElementoPadre.querySelector(
        ".nombre-tarjeta-receta"
    );
    const IngredientesTarjetaReceta = ElementoPadre.querySelector(
        ".ingredientes-tarjeta-receta"
    );
    const IntruccionesTarjetaReceta = ElementoPadre.querySelector(
        ".instrucciones-tarjeta-receta"
    );
    const TiempoCocinadoTarjetaReceta = ElementoPadre.querySelector(
        ".tiempo-tarjeta-receta"
    );
    const NumeroPorcionesTarjetaReceta = ElementoPadre.querySelector(
        ".numero-porciones-tarjeta-receta"
    );
    const CategoriaTarjetaReceta = ElementoPadre.querySelector(
        ".categoria-tarjeta-receta"
    );
    const DificultadTarjetaReceta = ElementoPadre.querySelector(
        ".dificultad-tarjeta-receta"
    );
    window.location.href = "#section-form-receta"
    NombreReceta.value = NombreTarjetaReceta.textContent;
    IngredientesReceta.value = IngredientesTarjetaReceta.textContent;
    InstruccionesReceta.value = IntruccionesTarjetaReceta.textContent;
    TiempoCocinado.value = TiempoCocinadoTarjetaReceta.textContent;
    NumeroPorciones.value = NumeroPorcionesTarjetaReceta.textContent;
    CategoriaReceta.value = CategoriaTarjetaReceta.textContent;
    DificultadReceta.value = DificultadTarjetaReceta.textContent;
};
const EliminarReceta = (event) => {
    const ElementoPadre = event.target.parentElement.parentElement;
    ElementoPadre.remove();
    localStorage.setItem("recetas", ListaRecetas.innerHTML);
};
const BucarRecetas = (event) => {
    debugger
    const Patron = new RegExp(`/^${event.target.value}/`,"i")
    for (let i = 0; i < ListaRecetas.children.length; i++) {
        const element = ListaRecetas.children[i];
        if (Patron.test(element.querySelector(".nombre-tarjeta-receta").textContent)) {
            element.style.display = "flex"
        } else {
            element.style.display = "none"
        }
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const ContenidoListasRecetas = localStorage.getItem("recetas");
    if (ContenidoListasRecetas !== null) {
        ListaRecetas.innerHTML = ContenidoListasRecetas;
    }
});
