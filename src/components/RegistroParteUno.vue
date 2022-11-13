<script>
</script>

<template>
  <div class="box">
    <div class="field">
      <div class="column"></div>
      <p class="subtitle ">Registrate</p>
      <div class="column"></div>
      <label class="label">Nombre</label>
      <div class="control">
        <input class="input" type="text" placeholder="Tu Nombre">
      </div>
    </div>

    <div class="field">
      <label class="label">Nombre de Usuario</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input is-success" type="text" placeholder="Tu nombre de usuario" value="bulma">
        <span class="icon is-small is-left">
         <font-awesome-icon icon="fa-solid fa-user" />
       </span>
       <span class="icon is-small is-right">
         <font-awesome-icon icon="fa-solid fa-check" />
       </span>
     </div>
     <p class="help is-success">Tu nombre de usuario es invalido</p>
   </div>

   <div class="field">
    <label class="label">Email</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input is-danger" type="email" placeholder="Introduce Tu Email">
      <span class="icon is-small is-left">
        <font-awesome-icon icon="fa-solid fa-at" />
      </span>
      <span class="icon is-small is-right">
       <font-awesome-icon icon="fa-solid fa-triangle-exclamation" />
     </span>
   </div>
   <p class="help is-danger">El email es invalido</p>
 </div>

 <div class="field">
  <label class="label">Numero</label>
  <div class="control">
    <input class="input" type="phone" placeholder="Tu Numero">
  </div>
  <p class="help is-danger">El numero es necesario</p>
</div>


<div class="field">
  <label class="label">Eliga su tipo de cuenta:</label>
  <div class="control">
    <div class="select">
      <select>
        <option>Fisioterapeuta</option>
        <option>Cliente</option>
      </select>
    </div>
  </div>
</div>

<div class="field">
  <label class="label"></label>
</div>
<div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox"> 
      Estoy de acuerdo con <a href="#">los términos y condiciones</a>
    </label>
  </div>
</div>

<div class="field is-grouped">
  <div class="control">
    <button class="button is-link">Seguir con el registro</button>
  </div>
  <div class="control">
    <button class="button is-link is-light">Cancelar</button>
  </div>
</div>
</div>
</template>

