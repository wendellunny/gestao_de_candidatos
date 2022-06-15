@extends('app.app')

@section('content')
<form action="" class="row">
    <fieldset class="col-12">
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
        <button class="btn btn-primary">Próximo</button>
    </fieldset>
</form>
@endsection