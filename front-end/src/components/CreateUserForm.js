function CreateUserForm() {
  return (
    <form>
      <label htmlFor="input-name">
        Nome
        <input
          data-testid="admin_manage__input-name"
          id="input-name"
        />
      </label>
      <label htmlFor="input-email">
        Email
        <input
          data-testid="admin_manage__input-email"
          id="input-email"
        />
      </label>
      <label htmlFor="input-password">
        Senha
        <input
          data-testid="admin_manage__input-password"
          id="input-password"
        />
      </label>
      <label htmlFor="select-role">
        Tipo
        <select
          data-testid="admin_manage__select-role"
          id="select-role"
        >
          <option>Vendedor</option>
          <option>Cliente</option>
        </select>
      </label>
      <button
        type="button"
        data-testid="admin_manage__button-register"
      >
        CADASTRAR
      </button>
    </form>
  );
}

export default CreateUserForm;
