@extends('templates.homePageTemplate')

@section('content')
    <div class="d-flex justify-content-center" style="margin: 20px">
        <h3>Редактирование пароля</h3>
    </div>

    <div class="d-flex justify-content-center" style="margin: 20px">
        <form class="w-50" method="post" action="{{ route('editPassword') }}">

            <div class="form-group">
                <label for="formGroupExampleInput">Новый пароль</label>
                <input type="password" class="form-control @error('password') is-invalid @enderror" name="password" placeholder="Новый пароль" required autocomplete="new-password">
            </div>

            <div class="form-group">
                <label for="formGroupExampleInput">Новый пароль</label>
                <input type="password" class="form-control" name="password_confirmation" placeholder="Подтверждение пароля" required autocomplete="new-password">
            </div>

            <button type="submit" class="btn btn-secondary">Изменить</button>
            {{ csrf_field() }}
        </form>


    </div>
@endsection