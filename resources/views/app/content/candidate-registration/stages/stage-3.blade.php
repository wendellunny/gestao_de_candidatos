<fieldset class="col-12 @if($errors->isEmpty()) d-none @endif " id="stage-3">
    <div class="form-group">
        <label for="">Usuário</label>
        <input class="form-control @error('user') is-invalid @enderror" name="user" type="text">
        @error('user') <span class="alert alert-danger">{{$message}}</span> @enderror
    </div>
    <div class="form-group">
        <label for="">Senha</label>
        <input class="form-control @error('password') is-invalid @enderror" type="password" name="password">
        @error('password') <span class="alert alert-danger"> {{$message}} </span> @enderror
    </div>
    <div class="form-group">
        <label for="">Confirme a senha</label>
        <input class="form-control"  type="password" name="password_confirmation">
    </div>
</fieldset>