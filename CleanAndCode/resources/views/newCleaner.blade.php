@push('scripts')
    <script src="js/admin.js"></script>
@endpush


@extends('templates.homePageTemplate')

@section('content')

<div class="d-flex justify-content-center" style="margin: 20px">
    <h3>Добавление нового аккаунта уборщика</h3>
</div>

<div class="d-flex justify-content-center" style="margin: 20px">
    <form class="w-50" method="post" action="{{ route('addNewCleaner') }}">

        <div class="form-group">
            <label for="formGroupExampleInput">Email зарегистрированного в системе пользователя</label>
            <input type="email" class="form-control @error('password') is-invalid @enderror" name="email" placeholder="Email" required>
        </div>
        <button type="submit" class="btn btn-secondary">Добавить</button>
        {{ csrf_field() }}
    </form>


</div>

@endsection