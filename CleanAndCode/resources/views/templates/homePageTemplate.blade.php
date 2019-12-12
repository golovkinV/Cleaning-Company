<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    @stack('scripts')
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="shortcut icon" href="{{ asset('img/favicon.ico') }}" type="image/x-icon">
    <title>Чистка мозгов</title>

</head>
<body class="bg-light">
<header>
    <nav class="navbar navbar-expand-md navbar-dark" style="background-color: #2a69af">
        <a class="navbar-brand" href="/">Чистка мозгов</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="">Категории <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="">Компании</a>
                </li>
                @if(Auth::user()->isAdmin == 1)
                    <li class="nav-item active">
                        <a class="nav-link" href="http://localhost/phpmyadmin" target="_blank">Управление БД</a>
                    </li>
                @endif
            </ul>
            <form class="form-inline mt-2 mt-md-0" style="margin-right: 50px" method="post" action="">
                <input class="form-control mr-sm-2" type="text" placeholder="Поиск компании" aria-label="Search" name="searchInput2" required>
                <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Поиск</button>
                {{ csrf_field() }}
            </form>

            <div class="btn-group">
                @if(Auth::user()->isAdmin == 1)
                    <a href="{{ url('/admin') }}">
                        <button class="btn btn-outline-light my-2 my-sm-0" style="margin-left: 10px">
                            {{Auth::user()->name}}
                        </button>
                    </a>
                @else
                    <a href="{{ url('/home') }}">
                        <button class="btn btn-outline-light my-2 my-sm-0" style="margin-left: 10px">
                            {{Auth::user()->name}}
                        </button>
                    </a>
                @endif
                <button type="button" class="btn btn-outline-light my-2 my-sm-0 dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="margin-right: 60px">
                    <span class="sr-only">Toggle Dropdown</span>
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="{{ route('logout') }}"
                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                        {{ __('Выйти') }}
                    </a>

                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                        @csrf
                    </form>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="/editProfile">Редактировать профиль</a>
                    <a class="dropdown-item" href="/editPassword">Редактировать пароль</a>
                </div>
            </div>

        </div>
    </nav>
</header>

@yield('content')

<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script src="{{ asset('js/API/API.js')}}" type="text/javascript"></script>
</body>
</html>