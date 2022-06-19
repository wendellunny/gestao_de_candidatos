@extends('app.app')

@section('content')
<form action="{{route('candidate.store')}}" method="POST" class="row p-5">@csrf
    @include('app.content.candidate-registration.stages.stage-1')
    @include('app.content.candidate-registration.stages.stage-2')
    @include('app.content.candidate-registration.stages.stage-3')
    @if($errors->any())
        <button class="btn btn-primary"  id="button-submit" >
            Concluído
        </button>
    @else 
        <button class="btn btn-primary" type="button" id="button-prox" data-stage='1'>
            Próximo
        </button>
        <button class="btn btn-primary d-none"  id="button-submit" >
            Concluído
        </button>
    @endif
</form>
@endsection