@extends('app.app')

@section('content')
<form action="" class="row">
    <fieldset class="col-12" id="stage-1">
        <div class="form-group">
            <label for="">Nome</label>
            <input class="form-control" type="text">
        </div>
        <div class="form-group">
            <label for="">Email</label>
            <input class="form-control" type="text">
        </div>
        <div class="form-group">
            <label for="">Telefone</label>
            <input class="form-control" type="text">
        </div>
    </fieldset>

    <fieldset class="col-12 d-none" id="stage-2">
        <div class="form-group">
            <label for="">Experiência Profissional</label>
            <input class="form-control" type="text">
        </div>
        <div class="form-group">
            <label for="">Formação Acadêmica</label>
            <input class="form-control" type="text">
        </div>
    </fieldset>

    <fieldset class="col-12 d-none" id="stage-3">
        <div class="form-group">
            <label for="">Usuário</label>
            <input class="form-control" type="text">
        </div>
        <div class="form-group">
            <label for="">Senha</label>
            <input class="form-control" type="text">
        </div>
        <div class="form-group">
            <label for="">Confirme a senha</label>
            <input class="form-control" type="text">
        </div>
    </fieldset>
    <button class="btn btn-primary">Próximo</button>
</form>
@endsection