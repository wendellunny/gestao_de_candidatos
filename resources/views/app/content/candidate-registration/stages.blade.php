@extends('app.app')

@section('content')
<form action="" class="row">
    @include('app.content.candidate-registration.stages.stage-1')
    @include('app.content.candidate-registration.stages.stage-2')
    @include('app.content.candidate-registration.stages.stage-3')

    <button class="btn btn-primary" type="button" id="button-prox" data-stage='1'>
        Próximo
    </button>
</form>
@endsection