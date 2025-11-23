<template>
  <div class="form-page-container">
    <div class="form-card">
      <h2 class="form-title">Criar Projeto</h2>

      <p class="form-subtitle">Preencha os dados do projeto</p>

      <form @submit.prevent="salvarProjeto">
        <input v-model="titulo" type="text" placeholder="Nome do projeto" />

        <textarea
          v-model="descricao"
          placeholder="Descrição do projeto"
          rows="4"
        ></textarea>

        <input v-model="autor" type="text" placeholder="Nome do autor" />

        <input
          type="text"
          v-model="valorFormatado"
          placeholder="R$ 0,00"
          @input="formatarValor"
        />

        <button type="submit" class="submit-btn">SALVAR</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "CriarProjeto",
  data() {
    return {
      titulo: "",
      descricao: "",
      autor: "",
      valor: "", // apenas números
      valorFormatado: "", // com R$
    };
  },
  methods: {
    formatarValor(e) {
      let v = e.target.value;

      // remove tudo que não for número
      v = v.replace(/\D/g, "");

      this.valor = v;

      if (!v) {
        this.valorFormatado = "";
        return;
      }

      // formata como moeda
      v = (Number(v) / 100).toFixed(2) + "";
      v = v.replace(".", ",");
      v = "R$ " + v;

      this.valorFormatado = v;
    },

    salvarProjeto() {
      console.log("Salvando projeto...");
      console.log("Valor numérico:", this.valor); // ex: 1990
    },
  },
};
</script>

<style scoped>
.form-page-container {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 40px;
}

.form-card {
  width: 75%;
  max-width: 950px;
  background: #111;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
}

.form-title {
  background: #7850b4;;
  color: white;
  padding: 20px;
  border-radius: 12px 12px 0 0;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  margin: -40px -40px 30px -40px;
}

.form-subtitle {
  color: #7850b4;
  margin-bottom: 20px;
  text-align: left;
}

/* Inputs */
form input,
form textarea {
  width: 100%;
  background: #0d0d0d;
  border: 1px solid #3a3a3a;
  padding: 14px;
  border-radius: 8px;
  margin-bottom: 18px;
  color: #f3eaff;
  font-size: 16px;
}

/* Placeholder */
form input::placeholder,
form textarea::placeholder {
  color: #ffffff;
}

.submit-btn {
  width: 100%;
  padding: 14px;
  background: #7850b4;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
}

.submit-btn:hover {
  background: #6d2fcc;
}
</style>
