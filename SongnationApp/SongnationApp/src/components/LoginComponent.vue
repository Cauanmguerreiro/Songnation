<template>
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
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['update:modelValue'])

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const rememberMe = ref(false)
const loading = ref(false)

const close = () => {
  emit('update:modelValue', false)
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

<style scoped lang="scss">
@import '../css/logincomponent.scss';
</style>