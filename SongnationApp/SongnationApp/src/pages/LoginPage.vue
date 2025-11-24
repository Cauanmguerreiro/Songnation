<template>
  <div class="login-modal">
    <!-- Header -->
    <div class="modal-header">
      <h2 class="modal-title">Entrar no Songnation</h2>
    </div>

    <!-- Body -->
    <div class="modal-body">
      <p class="modal-subtitle">Acesse sua conta para explorar letras e artistas</p>

      <!-- Email -->
      <div class="form-group">
        <label for="email">Email</label>
        <q-input
          id="email"
          v-model="email"
          filled
          dense
          placeholder="seu.email@exemplo.com"
          type="email"
          class="form-input"
          input-class="no-transform"
          :rules="[val => val && val.length > 0 || 'Email é obrigatório']"
        >
          <template #prepend>
            <q-icon name="mail" />
          </template>
        </q-input>
      </div>

      <!-- Senha -->
      <div class="form-group">
        <label for="password">Senha</label>
        <q-input
          id="password"
          v-model="password"
          filled
          dense
          :type="showPassword ? 'text' : 'password'"
          placeholder="Sua senha"
          class="form-input"
          :rules="[val => val && val.length > 0 || 'Senha é obrigatória']"
        >
          <template #prepend>
            <q-icon name="lock" />
          </template>
          <template #append>
            <q-icon
              :name="showPassword ? 'visibility' : 'visibility_off'"
              class="cursor-pointer"
              @click="showPassword = !showPassword"
            />
          </template>
        </q-input>
      </div>

      <!-- Remember -->
      <div class="form-footer row justify-between items-center q-my-md">
        <q-checkbox
          v-model="rememberMe"
          label="Lembrar-me"
          class="checkbox-label"
        />
        <a href="#" class="forgot-link">Esqueceu a senha?</a>
      </div>

      <!-- Login Button -->
      <q-btn
        label="Entrar"
        color="primary"
        class="login-btn full-width q-mb-md"
        size="lg"
        @click="login"
        :loading="loading"
      />

      <p class="signup-text q-mt-md text-center">
        Não tem conta? <a href="#" class="signup-link">Crie uma agora</a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { Notify } from 'quasar'

const emit = defineEmits(['update:modelValue', 'login-success'])

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const rememberMe = ref(false)
const loading = ref(false)

defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const login = async () => {
  if (!email.value || !password.value) {
    Notify.create({
      type: 'negative',
      message: 'Preencha todos os campos',
      position: 'top'
    })
    return
  }

  loading.value = true
  try {
    const response = await axios.post('http://localhost:5000/usuarios/login', {
      email: email.value,
      password: password.value
    })

    if (response.status === 200) {
      Notify.create({
        type: 'positive',
        message: 'Login realizado com sucesso!',
        position: 'top'
      })
      
      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token)
      }
      
      emit('login-success', response.data)
      emit('update:modelValue', false)

      setTimeout(() => {
        window.location.reload()
      }, 250)
    }
  } catch (error) {
    let errorMessage = 'Erro ao fazer login'
    
    if (error.response?.status === 401 || error.response?.status === 404) {
      errorMessage = 'Email ou senha incorretos'
    } else if (!error.response) {
      errorMessage = 'Erro de conexão com o servidor'
    }
    
    Notify.create({
      type: 'negative',
      message: errorMessage,
      position: 'top'
    })
  } finally {
    loading.value = false
  }
}
</script>

<style scoped lang="scss">
@import '../css/variables.scss';

/* ============================
   Estilo do login-modal
============================ */

.login-modal {
  background: $dark;
  border-radius: 14px;
  width: 100%;
  max-width: 620px;
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.5),
    0 0 18px rgba(224, 64, 251, 0.15);
  overflow: hidden;
  color: white;
  font-family: 'Inter', sans-serif;
  border: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
  padding-bottom: 18px;
}

/* detalhe roxo lateral */
.login-modal::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 5px;
  height: 100%;
  background: linear-gradient(180deg, $accent, $primary);
  border-radius: 5px 0 0 5px;
}

/* Header */
.modal-header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 22px 24px;
  background: #2A1E2C;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.modal-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.5px;
}

/* Body */
.modal-body {
  padding: 32px 28px;
}

.modal-subtitle {
  font-size: 0.95rem;
  color: #b0a0c0;
  margin: 0 0 24px 0;
  line-height: 1.5;
}

/* Labels e inputs */
.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  color: #d1c7dd;
  margin-bottom: 8px;
  letter-spacing: 0.8px;
}

/* Inputs do Quasar */
:deep(.form-input .q-field__control) {
  background-color: $dark-page !important;
  border-radius: 8px;
  padding: 8px 16px;
  min-height: 48px;
  color: white;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.3);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

:deep(.form-input .q-field__control:hover) {
  border-color: $primary;
}

:deep(.form-input.q-field--focused .q-field__control) {
  border-color: $accent;
  box-shadow: 0 0 0 3px rgba(224, 64, 251, 0.3);
}

:deep(.form-input .q-field__native),
:deep(.form-input .q-field__input) {
  color: white;
  text-transform: none !important;
}

:deep(.form-input .q-field__native::placeholder),
:deep(.form-input .q-field__input::placeholder) {
  color: #757575;
}

/* Botão */
.login-btn {
  background: linear-gradient(145deg, $accent 0%, $primary 100%);
  color: white;
  font-weight: 700;
  letter-spacing: 0.7px;
  border-radius: 8px;
  text-transform: uppercase;
  padding: 14px 24px;
  font-size: 1rem;
  width: 100%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  margin-top: 10px;
  transition: all 0.3s ease;
}

.login-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(224, 64, 251, 0.4);
}

</style>
