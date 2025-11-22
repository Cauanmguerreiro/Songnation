<template>
  <div v-if="open" class="login-overlay" @click.self="close">
    <div class="login-modal">
      <!-- Header do Modal -->
      <div class="modal-header">
        <h2 class="modal-title">Entrar na Songnation</h2>
        <q-btn
          icon="close"
          flat
          round
          dense
          color="white"
          @click="close"
        />
      </div>

      <!-- Body do Modal -->
      <div class="modal-body">
        <p class="modal-subtitle">Acesse sua conta para explorar letras e artistas</p>

        <!-- Email Input -->
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
            :rules="[val => val && val.length > 0 || 'Email é obrigatório']"
          >
            <template #prepend>
              <q-icon name="mail" />
            </template>
          </q-input>
        </div>

        <!-- Password Input -->
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

        <!-- Remember & Forgot -->
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

        <!-- Divider -->
        <div class="divider q-my-md">
          <span>Ou</span>
        </div>

        <!-- Social Login -->
        <div class="social-login">
          <q-btn
            outline
            color="white"
            icon="mdi-google"
            label="Google"
            class="social-btn full-width q-mb-sm"
            size="md"
          />
          <q-btn
            outline
            color="white"
            icon="mdi-github"
            label="GitHub"
            class="social-btn full-width"
            size="md"
          />
        </div>

        <!-- Sign Up Link -->
        <p class="signup-text q-mt-md text-center">
          Não tem conta? <a href="#" class="signup-link">Crie uma agora</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const rememberMe = ref(false)
const loading = ref(false)

const open = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

const close = () => {
  open.value = false
}

const login = async () => {
  if (!email.value || !password.value) {
    console.log('Preencha todos os campos')
    return
  }

  loading.value = true
  try {
    // Sua lógica de login aqui
    console.log('Login com:', { email: email.value, password: password.value })
    // await loginAPI(email.value, password.value)
    loading.value = false
  } catch (error) {
    console.error('Erro ao fazer login:', error)
    loading.value = false
  }
}
</script>

<style scoped>
/* OVERLAY */
.login-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(4px);
}

/* MODAL */
.login-modal {
  background: #1d1d1d;
  border-radius: 16px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
  overflow: hidden;
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* HEADER */
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(156, 39, 176, 0.1);
}

.modal-title {
  font-size: 24px;
  font-weight: 700;
  color: white;
  margin: 0;
}

/* BODY */
.modal-body {
  padding: 24px;
}

.modal-subtitle {
  font-size: 14px;
  color: #b0a0c0;
  margin: 0 0 20px 0;
}

/* FORM */
.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: #d1c7dd;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.form-input {
  --q-primary: #9c27b0;
}

:deep(.form-input .q-field__control) {
  color: white;
  background-color: #2b2330 !important;
  padding: 12px 16px;
  border-radius: 8px;
}

:deep(.form-input .q-field__native,
.form-input .q-field__input) {
  color: white;
}

:deep(.form-input .q-field__native::placeholder,
.form-input .q-field__input::placeholder) {
  color: #8a7a98;
}

:deep(.form-input .q-icon) {
  color: #9c27b0;
}

:deep(.form-input.q-field--filled .q-field__control:before) {
  border-color: transparent;
}

:deep(.form-input.q-field--filled .q-field__control:hover:before) {
  border-color: #9c27b0;
}

/* FORM FOOTER */
.form-footer {
  font-size: 13px;
}

.checkbox-label {
  --q-primary: #9c27b0;
}

:deep(.checkbox-label .q-checkbox__inner) {
  color: #9c27b0;
}

.forgot-link {
  color: #9c27b0;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.forgot-link:hover {
  color: #e040fb;
  text-decoration: underline;
}

/* BUTTONS */
.login-btn {
  background: linear-gradient(135deg, #9c27b0 0%, #e040fb 100%);
  color: white;
  font-weight: 600;
  letter-spacing: 0.5px;
  border-radius: 8px;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

.login-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(156, 39, 176, 0.4);
}

/* DIVIDER */
.divider {
  display: flex;
  align-items: center;
  color: #8a7a98;
  font-size: 13px;
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
}

.divider span {
  margin: 0 12px;
}

/* SOCIAL LOGIN */
.social-login {
  margin: 12px 0;
}

.social-btn {
  border-color: #443a50;
  color: white;
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.2s;
}

.social-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: #9c27b0;
}

/* SIGNUP TEXT */
.signup-text {
  font-size: 13px;
  color: #b0a0c0;
  margin: 0;
}

.signup-link {
  color: #9c27b0;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
}

.signup-link:hover {
  color: #e040fb;
  text-decoration: underline;
}

/* RESPONSIVE */
@media (max-width: 480px) {
  .login-modal {
    max-width: 90%;
  }

  .modal-title {
    font-size: 20px;
  }

  .modal-body {
    padding: 20px;
  }
}
</style>