<template>
	<form action="" class="form">
			<div class="form__wrap">
				<div class="form__group">
					<input type="text" class="input form__input" placeholder="Имя">
				</div>
				<div class="form__group">
      		<input type="text" class="input form__input" placeholder="Email">
      	</div>
      	<div class="form__group">
      		<input type="text" class="input form__input" placeholder="Тел.">
      	</div>
			</div>
			<span class="form__cover">
				{{ $t("message.send_an_application") }}
			</span>
      <button type="submit" class="button form__button">
        {{ $t("message.send") }}
      </button>
    </form>
</template>

<script>
export default {
  name: "Form"
};
</script>

<style scoped lang="scss">
.form {
  z-index: 20;
  position: absolute;
  left: calc(30vw + 1px);
  bottom: -5px;
  width: calc(20vw - 2px);
  height: 3.625em;
  overflow: hidden;
  transition: 0.4s linear;
  @media screen and (max-width: 500px) {
    left: 10vw;
    width: 80vw;
    position: fixed;
    bottom: 0;
    height: 4.625em;
  }
}
.button {
  width: 100%;
  height: 58px;
  font-family: "CourierNew", sans-serif;
  font-weight: 700;
  cursor: pointer;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  outline: none;
  box-shadow: none;
  border: none;
  position: absolute;
  bottom: 0;
  z-index: 10;
  color: #fff;
  background: #0c0c0c;
  bottom: -3.625em;
  transition: 0.2s linear 0.4s;
  @media screen and (max-width: 500px) {
    height: 48px;
    font-size: 10px;
    bottom: -50px;
  }
}
.form:hover .button {
  bottom: 0;
}
.form__cover {
  position: absolute;
  width: 100%;
  height: 58px;
  background: #fff;
  color: #0c0c0c;
  font-family: "CourierNew", sans-serif;
  font-weight: 700;
  cursor: pointer;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    height: 48px;
    font-size: 10px;
  }
}
.input {
  padding: 0.625em 0;
  width: 100%;
  font-size: 0.625em;
  font-family: "CourierNew", sans-serif;
  font-weight: 700;
  border: none;
  position: relative;
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
}
.input:focus {
  outline: none;
}
.form__group {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  margin: 0 0 2em 0;
}
.form__group:first-child {
  margin-top: 2em;
}
.form__group:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: rgba(0, 0, 0, 0.5);
  transition: 0.6s linear;
}
.form__wrap {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 0;
  background: #fff;
  height: 0;
  overflow: hidden;
  transition: 0.4s linear;
  padding: 0 4.1vw 0 2.9vw;
  height: 13em;
  @media screen and (max-width: 500px) {
    height: 25em;
  }
}
.input::-webkit-input-placeholder {
  color: #000;
}
.input::-moz-placeholder {
  color: #000;
}
.input:-moz-placeholder {
  color: #000;
}
.input:-ms-input-placeholder {
  color: #000;
}
.form:hover {
  height: 16.625em;
  @media screen and (max-width: 500px) {
    height: 23.625em;
  }
}
@media screen and (max-width: 500px) {
  .is-menu {
    .form__cover {
      background: hsl(0, 0%, 5%);
      color: hsl(0, 0%, 100%);
    }
  }
}
.is-menu .form:hover {
  height: 20vw;
  @media screen and (max-width: 500px) {
    height: 23.625em;
  }
}
.form:hover .form__group:after {
  width: 100%;
}
</style>
