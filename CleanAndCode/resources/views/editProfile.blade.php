@extends('templates.homePageTemplate')

@section('content')
    <div class="d-flex justify-content-center" style="margin: 20px">
        <h3>Редактирование профиля</h3>
    </div>

    <div class="d-flex justify-content-center" style="margin: 20px">
        <form class="w-50" method="post" action="{{ route('editProfile') }}">
            <div class="form-group">
                <label for="formGroupExampleInput">Имя пользвателя</label>
                <input type="text" class="form-control" name="name" placeholder="Имя пользвателя" value="{{ Auth::user()->name }}" required>
            </div>
            <div class="form-group">
                <label for="formGroupExampleInput2">Email</label>
                <input type="email" class="form-control" name="email" placeholder="Email" required autocomplete="off" value="{{ Auth::user()->email }}">
            </div>
            <button type="submit" class="btn btn-secondary">Редактировать</button>
            {{ csrf_field() }}
        </form>

    </div>
@endsection